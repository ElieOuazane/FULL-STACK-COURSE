
export default function Todos(props) {
   return props.data.map((item) => {
      return <div className="item" onClick={() => { }} key={item.id}> {item.title} </div>
   })
}
