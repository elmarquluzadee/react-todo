import "./ListItem.css"

const ListItem = (props) => {
  return (
    <div className='list-item hover:bg-gray-200'>
        <div>   
          <input type="checkbox" className="mr-4" />
          <span>Gorev 1</span>
        </div>
        <div className='remove-list-item'>
            Sil
        </div>
    
    </div>
  )
}

export default ListItem