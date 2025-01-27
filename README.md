# Real Estate Website

This is a Real Estate Website that allows users to explore and manage property listings efficiently. It is built using modern web technologies with a focus on security and user experience.

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript, Bootstrap
- **Backend:** Node.js, Express.js, MongoDB
- **Additional Features:**
  - Password salting and hashing for secure authentication.
  - Cloudinary for property image storage.

---

## Setup Instructions

### Prerequisites
Ensure the following are installed on your system:
- Node.js
- MongoDB

### Steps to Set Up
1. **Clone the Repository:**
   ```bash
   git clone <repository_url>
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Initialize the Database:**
   ```bash
   cd init
   node index.js
   cd ..
   ```

4. **Configure Cloudinary:**
   Create a `.env` file in the root directory and add:
   ```env
   CLOUDINARY_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

5. **Start the Server:**
   ```bash
   node app.js
   ```

6. **Access the Website:**
   Open your browser and visit:
   ```
   http://localhost:3000
   ```

---

## Contributing
Contributions are welcome! Fork the repository, make your changes, and open a pull request.

## License
This project is licensed under the MIT License.

## Contact
For questions or feedback, reach out at [your_email@example.com].

