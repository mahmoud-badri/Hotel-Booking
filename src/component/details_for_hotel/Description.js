

const DescriptionHotel = () => {
    const list = [
        { icon: "check", text: "Lorem ipsum dolor sit amet" },
        { icon: "check", text: "No scripta electram necessitatibus sit" },
        { icon: "check", text: "Quidam percipitur instructior an eum" },
        { icon: "check", text: "Ut est saepe munere ceteros" },
        { icon: "check", text: "No scripta electram necessitatibus sit" },
        { icon: "check", text: "Quidam percipitur instructior an eum" },
        { icon: "check", text: "Quidam percipitur instructior an eum" },
        { icon: "check", text: "Lorem ipsum dolor sit amet" },
        { icon: "check", text: "No scripta electram necessitatibus sit" },
        { icon: "check", text: "Quidam percipitur instructior an eum" },
        { icon: "check", text: "No scripta electram necessitatibus sit" },

    ]
    return (
        <>
            <div className="row text-dark my-3" style={{ textAlign: "start" }}>
                <div className="col-md-3">
                    <h3>
                        Description
                    </h3>
                </div>

                <div className="col-md-9 " >
                    <p>
                        Lorem ipsum dolor sit amet, at omnes deseruisse pri. Quo aeterno legimus insolens ad. Sit cu detraxit constituam, an mel iudico constituto efficiendi. Eu ponderum mediocrem has, vitae adolescens in pro. Mea liber ridens inermis ei,
                        mei legendos vulputate an, labitur tibique te qui.
                    </p>
                    <h4 className='py-3'>
                        Hotel facilities
                    </h4>
                    <p>
                        Lorem ipsum dolor sit amet, at omnes deseruisse pri. Quo aeterno legimus insolens ad. Sit cu detraxit constituam,
                        an mel iudico constituto efficiendi.
                    </p>
                    <ItemList columns={2} itemlist={list} />
                </div>
            </div>


        </>
    );
};

export default DescriptionHotel;
