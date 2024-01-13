import { confirmWrapper, confirm } from './confirm'

function CallConfirmation() {

const handleOnClick = async () => {
  if (await confirm({
    confirmation: 'Are you sure?'
  })) {
    console.log('yes');
  } else {
    console.log('no');
  }
}

const handleOnClick2 = async () => {
  if (await confirmWrapper('Are your sure?')) {
    console.log('yes');
  } else {
    console.log('no');
  }
}

return(
    <div>
        <button onClick={handleOnClick}>confirm 1</button>
        <button onClick={handleOnClick2}>confirm 1</button>
    </div>
  
)

}
export default CallConfirmation