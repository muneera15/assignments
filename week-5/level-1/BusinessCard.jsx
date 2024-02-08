export function BusinessCard(props){
    return (
    <div style ={style.card}>
        <h1 style={StyleSheet.name}>{props.name}</h1>
        <p style={style.description}>{props.description}</p>
        <h3 style = {style.interestsHeader}>Interests</h3>
        <ul style = {style.interestsList}>
            {props.interest.map((interest)=>{
                <li key={interest} style ={style.interestsItems}>
                    {interest}
                </li>
            })}
        </ul>
        <div style={style.socialLinks}>
         <a href={props.Linkedin} target="blank" rel="noopener noreferer" style={styles.link}>
            LinkedIn</a>
            <a href={props.twitter} target="blank" rel="noopener noreferer" style={styles.link}>
                twitter</a>
                {props.otherSocialMedia && (
                    <a href={props.otherSocialMedia} target="blank" style={styles.link}>{props.otherSocialMedia.label}</a>
                )}
        </div>
    </div>
    );
}

//styles
