import "../css/Info.css";

export default function Info(props) {
    console.log(props);

    const { name, phone, age } = props;

    console.log(name);
    console.log(phone);
    console.log(age);

    return (
        <div className="title">
            <p>Name : {name}</p>
            <p>Age : {age}</p>
            <p>Phone : {phone}</p>
        </div>
    );
}
