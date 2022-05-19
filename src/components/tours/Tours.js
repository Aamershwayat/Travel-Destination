import './Tours.css';
export default function Tours(props) {
    console.log("props of Tours", props);
    return (

        <>
            {
                props.tourData.map(data => {
                    console.log(data);
                    return (
                        <div className='divname' key={data.id}>
                            <p id='name'>  City :  {data.name}</p>
                            <img src={data.image} />
                        </div>
                    )
                })
            }
        </>

    )
}
