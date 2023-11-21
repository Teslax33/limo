
const PickCarBox = ({data, id}) => {
  return (
    <div>
    <img src={data[0].img} alt={data[0].name} />
    </div>
  )
}

export default PickCarBox