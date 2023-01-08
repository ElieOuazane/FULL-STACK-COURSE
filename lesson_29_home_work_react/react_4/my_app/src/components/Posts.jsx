
export default function Posts(props) {
   return props.data.map((item) => {
      return <div className="item" onClick={() => { }} key={item.id}> {item.title} </div>
   })
}
