function TableRow({id,image,brand,name,price,details,category,ondelete,updating}){
    function DeleteRow(){
        ondelete(id)
    }
    function Update(){
        const newPrice = prompt('Enter the new price:');
        if (newPrice !== null && newPrice !== '') {
          updating(id, Number(newPrice));
        }
    }
    return(
        <>
         <tr key={id}>
              <td style={{width:"5%"}}>{id}</td>
              <td>{image}</td>
              <td>{brand}</td>
              <td>{name}</td>
              <td>{price}</td>
              <td>{details}</td>
              <td>{category}</td>
              <td>
                <button style={{backgroundColor:"rgb(13, 226, 155)"}} onClick={Update}>
                  Update
                </button>
              </td>
              <td>
                <button style={{backgroundColor:"red"}} onClick={DeleteRow}>
                  Delete
                </button>
              </td>
            </tr>
        </>
    )
}
export default TableRow