import "../style.css";

function UserCard({name, email, telefone, age}) {
    return (
    <section 
        className="title"
    >
        <p>Nome: {name}</p> 
        <p>E-mail: {email}</p>
        <p>Telefone: {telefone}</p>
        <p>Idade: {age}</p> 
    </section>
    )
}

export default UserCard;