import { ChangeEvent, FC, useState } from "react";

import "./InputForm.css";

const InputForm: FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [jobType, setJobType] = useState<string>("Job type");
  const [jobSource, setJobSource] = useState<string>("Job source");
  const [jobDescription, setJobDescription] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [zip, setZip] = useState<string>("");
  const [area, setArea] = useState<string>("Area");
  const [date, setDate] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [testSelect, setTestSelect] = useState<string>("Test select");

  const onPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, "").substring(0, 10);

    const first = input.substring(0, 3);
    const middle = input.substring(3, 6);
    const last = input.substring(6, 10);

    if (input.length > 6) {
      setPhone(`(${first}) ${middle}-${last}`);
    } else if (input.length > 3) {
      setPhone(`(${first}) ${middle}`);
    } else if (input.length >= 0) {
      setPhone(input);
    }
  };

  const handleData = () => {
    console.log({
      firstName,
      lastName,
      phone,
      email,
      jobType,
      jobSource,
      jobDescription,
      address,
      city,
      state,
      zip,
      area,
      date,
      startTime,
      endTime,
      testSelect}
    );

    // TODO send request using Pipedrive API...
  };

  return (
    <form>
      <div className="row">
        <div className="input-block">
          <div className="block-title">
            <h2>Client details</h2>
          </div>
          <div className="inputs-group">
            <div className="input-row">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              ></input>
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              ></input>
            </div>
            <div className="input-row">
              <input
                type="tel"
                name="phone"
                pattern="([0-9]{3})-[0-9]{3}-[0-9]{4}"
                placeholder="(XXX) XXX-XXXX"
                value={phone}
                onChange={(e) => onPhoneChange(e)}
              ></input>
            </div>
            <div className="input-row">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
          </div>
        </div>
        <div className="input-block">
          <div className="block-title">
            <h2>Job details</h2>
          </div>
          <div className="inputs-group">
            <div className="input-row">
              <select
                name="jobType"
                id="jobType"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
              >
                <option disabled selected>
                  Job type
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              <select
                name="jobSource"
                id="jobSource"
                value={jobSource}
                onChange={(e) => setJobSource(e.target.value)}
              >
                <option disabled selected>
                  Job source
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="input-row">
              <textarea
                name="jobDescription"
                placeholder="Job description(optional)"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="input-block">
          <div className="block-title">
            <h2>Service location</h2>
          </div>
          <div className="inputs-group">
            <div className="input-row">
              <input
                name="address"
                placeholder="Addres"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></input>
            </div>
            <div className="input-row">
              <input
                name="city"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              ></input>
            </div>
            <div className="input-row">
              <input
                name="state"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
              ></input>
            </div>
            <div className="input-row">
              <input
                name="zip"
                placeholder="ZIP code"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              ></input>
              <select
                name="area"
                id="area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              >
                <option disabled selected>
                  Area
                </option>
                <option value="Tampa">Tampa</option>
                <option value="2">2</option>
              </select>
            </div>
          </div>
        </div>
        <div className="input-block">
          <div className="block-title">
            <h2>Scheduled</h2>
          </div>
          <div className="inputs-group">
            <div className="input-row">
              <input
                type="date"
                name="startDate"
                placeholder="Start date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              ></input>
            </div>
            <div className="input-row">
              <input
                type="text"
                name="startTime"
                placeholder="Start time"
                onFocus={(e) => (e.target.type = "time")}
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              ></input>
              <input
                type="text"
                name="endTime"
                placeholder="End time"
                onFocus={(e) => (e.target.type = "time")}
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              ></input>
            </div>
            <div className="input-row">
              <select
                name="testSelect"
                id="testSelect"
                value={testSelect}
                onChange={(e) => setTestSelect(e.target.value)}
              >
                <option disabled selected>
                  Test select
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button className="yellow" onClick={handleData}>Create job</button>
        <button onClick={handleData}>Save info</button>
      </div>
    </form>
  );
};

export default InputForm;
