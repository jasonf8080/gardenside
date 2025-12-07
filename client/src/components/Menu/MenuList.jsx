import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MenuItem from "./MenuItem";
import MenuItemLoading from "./MenuItemLoading";
import { client } from "../../sanity";


const MenuList = () => {
    const [loading, setLoading] = useState(false)
    const [menuItems, setMenuItems] = useState([]);
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category') || 'pastries';
    const query = `*[_type == "menuItem" && category == "${category}"]{
        _id,
        name,
        ingredients,
        price,
        category
    }`;

  const fetchMenu = async () => {
    setLoading(true)
    try {
      const data = await client.fetch(query);
      setMenuItems(data);
    
    } catch (err) {
      console.error('Error fetching menu:', err);
      
    }
    setLoading(false)
  };

  useEffect(() => {
    fetchMenu();
  }, [category]);

  return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {loading ? <MenuItemLoading/> :
          menuItems.map((item, index) => {
            const { _id, name, ingredients, price } = item;
            return (
              <MenuItem
                key={item._id}
                _id={_id}
                name={name}
                ingredients={ingredients}
                price={price}
                index={index}
              />
            );
          })
        }
        </div>
  )
}

export default MenuList
