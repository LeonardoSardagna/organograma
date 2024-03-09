import "./rodape.css"

const Rodape = () => {
    return(
        <footer className="rodape">
            <img className="rick" src="/imagens/portal.png" alt="logo rick and morty"></img>
            <div>
                <ul>
            <li>
                <a href="https://www.instagram.com/leo_sardagna/">
                <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/instagram/default.svg" width="52" height="40" alt="instagram logo"  />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/leonardosardagna/">
                <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/linkedin/default.svg"  alt="linkedin logo"  />
                </a>
            </li>
           </ul>
            <p>&copy; 2024 <a href="https://github.com/LeonardoSardagna">Leonardo</a></p>
            </div>
            <img className="rick" src="/imagens/portal.png" alt="logo rick and morty"></img>
        </footer>
    )
}

export default Rodape