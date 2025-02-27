import { useNavigate } from 'react-router'
import { useNameContext } from '../contexts/nameContext';

export default function TestNavigate() {
    const navigate = useNavigate();

    // const {name} = useContext(nameContext);
    const {name} = useNameContext();

    return <button onClick={()=> navigate('/external/navigate')}>Navigator Name ({name}) </button>
}