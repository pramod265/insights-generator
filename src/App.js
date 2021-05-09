import React, { useState, useEffect } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
const FileDownload = require('js-file-download');

function App() {

  const [currentTime, setCurrentTime] = useState(0);
	const [selectedFile, setSelectedFile] = useState();
	const [isSelected, setIsSelected] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

	const handleSubmission = () => {
		const formData = new FormData();

		formData.append('file', selectedFile);

		fetch(
			'http://127.0.0.1:5000/generate_report',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.blob())
			.then((result) => {
        FileDownload(result, "my_report.html");
        // FileDownload(response.data, 'report.csv');
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};
	


  const getTime = () =>{
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    })
  }

  useEffect(() => {
    getTime();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p> Current Time is {currentTime} </p>

        <div>
          <input type="file" name="file" onChange={changeHandler} />
          {isSelected ? (
            <div>
              <p>Filename: {selectedFile.name}</p>
              <p>Filetype: {selectedFile.type}</p>
              <p>Size in bytes: {selectedFile.size}</p>
              <p>
                lastModifiedDate:{' '}
                {selectedFile.lastModifiedDate.toLocaleDateString()}
              </p>
            </div>
          ) : (
            <p>Select a file to show details</p>
          )}
          <div>
            <button onClick={handleSubmission}>Submit</button>
          </div>
      </div>



      </header>

    </div>
  );
}

export default App;
