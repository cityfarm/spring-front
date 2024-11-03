import React,{useEffect} from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';


function NotFound(props) {
    const navigate = useNavigate();

    useEffect(() => {
        // Tự động chuyển hướng về trang Home sau 3 giây
        const timer = setTimeout(() => {
            navigate('/');
        }, 3000);

        // Cleanup timer
        return () => clearTimeout(timer);
    }, [navigate]);


    return (
        <div>NotFound</div>
    )
}

NotFound.propTypes = {}

export default NotFound
