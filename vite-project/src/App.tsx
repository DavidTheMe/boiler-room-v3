import { useState } from "react";
import "./App.css";
import ActivityCard from "./components/ActivityCard.tsx";
import Form from "./components/Form.tsx";

function App() {
  // Use useState to store the list of activities
  const [activities, setActivities] = useState<
    { activityName: string; location: string; description: string; date: string }[]
  >([]);

  // Function to handle data from the child (Form)
  const handleFormData = (data: { activityName: string; location: string; description: string; date: string }) => {
    // Add new activity data to the activities array
    setActivities((prevActivities) => [...prevActivities, data]);
    console.log("Received form data:", data);
  };

  return (
    <>
      <div className="card">
        {/* You can add some other content here if needed */}
      </div>
      
      {/* Pass the handleFormData function to the Form component */}
      <Form onFormSubmit={handleFormData} />

      <div className="card-holder">
        {/* Dynamically render ActivityCard components based on activities */}
        {activities.map((activity, index) => (
          <ActivityCard
            key={index}
            name={activity.activityName}
            location={activity.location}
            description={activity.description}
            date={activity.date}
          />
        ))}
      </div>
    </>
  );
}

export default App;
