import React, { useState } from 'react';
import Template from '../../Pages/Template';
import LoadingSpinner from '../../Components/LoadingSpinner';

const Tasks = () => {
    const [isLoading, setIsloading] = useState(false);

    return (
        <Template title="Tasks">
            {isLoading ? <LoadingSpinner coverAllPage={true}/> : ''}
            <form>
            <div className="form-row">
                <div className="form-group col-md-1">
                    <label htmlFor="status">Status</label>
                    <select id="status" class="form-control">
                        <option>All</option>
                        <option value={true}>Completed</option>
                        <option value={false}>To do</option>
                    </select>
                </div>
            </div>
            </form>
        </Template>
    )

}

export default Tasks;