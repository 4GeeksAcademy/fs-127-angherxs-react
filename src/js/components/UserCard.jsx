export default function UserCard({ name, age, work }) {
    return (
        <div className="card" style={{ "width": "18rem" }}>
            <img src="https://i.pinimg.com/736x/36/0b/45/360b45b94af38e1f6ab544f7b45321aa.jpg" class="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Age: {age}</p>
                <p className="card-text">Profesión: {work}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );

}
