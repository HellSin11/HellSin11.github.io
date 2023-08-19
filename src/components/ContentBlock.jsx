import InfoContainer from "./InfoContainer";

const ContentBlock = ({data, repos, error}) => {

    let rep = []
    for (let i = 0; i < repos.length && i < 4; i++) {
        const item = `${i+1}. ` + repos[i].name
        rep.push(item)
    }

    return (
        <div className='content__block'>
            {data.hasOwnProperty('login') && !error
                ?  <InfoContainer data={data} rep={rep}/>
                : <div>
                    {error === 'Request failed with status code 404'
                        ? <div>User is not defined</div>
                        : error !== undefined
                            ?   <div>Request limit exceeded :(
                                    Try later
                                </div>
                            :   <div></div>
                    }
                    </div>
            }

        </div>
    );
};

export default ContentBlock;