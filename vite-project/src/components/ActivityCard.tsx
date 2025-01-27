function ActivityCard(props) {
    const handleRemove = (event) => {
      // Find the top-level parent element and remove it
      const cardElement = event.target.closest('.activity-card');
      if (cardElement) {
        cardElement.remove();
      }
    };
  
    return (
      <div className="activity-card">
        <h2>{props.name}</h2>
        <p>{props.location}</p>
        <p>{props.description}</p>
        <p>{props.date}</p>
        <button onClick={handleRemove}>Remove</button>
      </div>
    );
  }
  
  export default ActivityCard;