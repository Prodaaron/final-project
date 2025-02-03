import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/AdminDashboard.css"; // Add styles if needed

const adminDashboard = () => {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/subscribers");
        console.log(response.data);
        setSubscribers(response.data);
      } catch (error) {
        console.error("Error fetching subscribers:", error);
      }
    };

    fetchSubscribers();
  }, []);

  return (
    <div className="admin-dashboard">
      <h2>Newsletter Subscribers</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Subscribed At</th>
          </tr>
        </thead>
        <tbody>
          {subscribers.map((subscriber) => (
            <tr key={subscriber.subscriber_id}>
              <td>{subscriber.subscriber_id}</td>
              <td>{subscriber.subscriber_name}</td>
              <td>{subscriber.subscriber_email}</td>
              <td>{new Date(subscriber.subscribed_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default adminDashboard;