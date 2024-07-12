

async function SSRExamplePage() {

    const email: string = 'm.platonov@innopolis.university';

    interface Data {
        alt: string;
        img: string;
        safe_title: string;
        year: string;
        month: string;
        day: string;
    }

    const params: URLSearchParams = new URLSearchParams();
    params.append('email', email);

    let response: Response = await fetch('https://fwd.innopolis.university/api/hw2?' + params.toString());
    let res = response.text();

    let url: string = 'https://fwd.innopolis.university/api/comic?id=' + res;
    let response1: Response = await fetch(url);


    let data: any = await response1.json();


    let Title = data['safe_title']

    let img = data['img']
    let alt = data['alt']

    let year: number = parseInt(data['year'], 10);
    let month: number = parseInt(data['month'], 10) - 1;
    let day: number = parseInt(data['day'], 10);

    let Date1 = new Date(year, month, day).toLocaleDateString();


    return (<div>
        <div id="title"> Title: {Title} </div>
        <img alt={alt} title="" src={img}/>
        <div style={{position: 'absolute', left: '500px', top: '8px'}}> Date: {Date1}</div>
    </div>)
}

export default SSRExamplePage;
