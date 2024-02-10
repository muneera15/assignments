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
const style = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    margin: '20px',
    maxWidth: '400px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f8f9fa'
  },
  name: {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#333',
  },
  description: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '15px',
  },
  socialLinks: {
    display: 'flex',
    marginBottom: '15px',
  },
  link: {
    textDecoration: 'none',
    color: '#fff', // Text color
    padding: '10px 15px', // Padding for the button
    borderRadius: '5px', // Border radius for rounded corners
    backgroundColor: '#007BFF', // Background color for the button
    display: 'inline-block', // Display as inline-block to be side by side
    margin: '10px', // Margin between buttons
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle lift
  },
  interestsHeader: {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#333',
  },
  interestsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  interestItem: {
    fontSize: '14px',
    marginBottom: '5px',
    color: '#555',
  },
};