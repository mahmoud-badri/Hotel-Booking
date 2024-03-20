
import React from 'react';
import './filter.css'

const Filter = (props) => {
    const { title, options } = props;

    return (
        <div id="filter" className="p-2 bg-light ms-md-4 ms-sm-2 border">
            <div className="border-bottom h5 text-uppercase fw-bold">{title}</div>
            <div className="box border-bottom">
                <div className="box-label text-uppercase d-flex align-items-center">
                    {title}
                    <button
                        className="btn ms-auto"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#inner-box"
                        aria-expanded="false"
                        aria-controls="inner-box"
                    >
                        <span className="fas fa-plus" />
                    </button>
                </div>
                <div id="inner-box" className="collapse show">
                    {options.map((option, index) => (
                        <div key={index} className="my-1">
                            <label className="tick">
                                {option.label}
                                <input type="checkbox" defaultChecked={option.defaultChecked} />
                                <span className="check" />
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Filter;