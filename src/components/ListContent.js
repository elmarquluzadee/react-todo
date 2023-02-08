 import './ListContent.css'
import ListItem from './ListItem'

const ListContent = () => {
  return (
    
    <div className='item-content-wrapper'>
        <div className='content'>
        {new Array(20).fill("Elmar").map((x,i)=>{
          return(
            <ListItem key={i} />
          )
        })}
        </div>
        <div>
            Footer
        </div>
    </div>
  )
}

export default ListContent
