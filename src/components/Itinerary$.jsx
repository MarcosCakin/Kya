import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
const Itinerary$ = ({price}) => {  
  const bills = Array.from({ length: price }, (_, index) => (
        <FontAwesomeIcon key={index} icon={faMoneyBill} className='text-xl mx-1'/>
  ));
  return (
      <div>
        {bills}
      </div>
  );
}
export default Itinerary$