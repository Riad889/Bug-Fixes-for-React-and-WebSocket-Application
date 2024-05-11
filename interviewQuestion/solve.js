const data=[
    {
        key: 'category',
        value: 'Clothing'
    },
    {
        key: 'category',
        value: 'Shoes'
    },
    {
        key: 'category',
        value: 'Accessories'
    },
    {
        key: 'category',
        value: 'Shirt',
        parent: 'Clothing'
    },
    {
        key: 'category',
        value: 'Pants',
        parent: 'Clothing'
    },
    {
        key: 'category',
        value: 'Sports',
        parent: 'Shoes'
    },
    {
        key: 'category',
        value: 'Sneakers',
        parent: 'Shoes'
    },
    {
        key: 'category',
        value: 'Watch',
        parent: 'Accessories'
    }
 ]

 let expected=[]
 let map= new Map();

 for(i=0;i<data.length;i++)
    {
        //  console.log("parent : ",data[i].parent,"\tIt's map value : ",map.get(data[i].parent))
        if(data[i].parent && map.get(data[i].parent)==undefined)
            {
                let ob={
                    'catagory':data[i].parent,
                    'subCatagory':[]
                }
                map.set(data[i].parent,1);
                ob.subCatagory.push(data[i].value)
              for(let j=i+1;j<data.length;j++)
                {
                   
                    if(data[i].parent===data[j].parent && !ob.subCatagory.includes(data[j].value))
                        {
                            map.set(data[j].parent,1);
                            ob.subCatagory.push(data[j].value)
                        }
                }
                expected.push(ob);
            }
           
            
         

    }
   
    console.log(expected);
 