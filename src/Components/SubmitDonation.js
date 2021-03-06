import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  FormGroup,
  Container,
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

const SubmitDonation = () => {
  const [validated, setValidated] = useState(false);

  const [donor_name, setDonor_name] = useState("");
  const [donor_surname, setDonor_surname] = useState("");
  const [donor_tckn, setDonor_tckn] = useState("");
  const [donor_year_of_birth, setDonor_year_of_birth] = useState("");
  const [donor_tel, setDonor_tel] = useState("");
  const [donor_email, setDonor_email] = useState("");
  const [donation_type_id, setDonation_type_id] = useState("");
  const [region_id, setRegion_id] = useState("");
  const [donation_date, setDonation_date] = useState("");

  const [donation_types, setDonation_types] = useState([]);
  const [regions, setRegions] = useState([]);

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      setValidated(true);
    }

    console.log("submit");

  };

  const submitDonationSecond = async (e) => {
    if(validated){
      try {
        const body = {
          donor_name,
          donor_surname,
          donor_tckn,
          donor_year_of_birth,
          donor_tel,
          donor_email,
          donation_type_id,
          region_id,
          donation_date,
        };
  
        const kimlikdogrula = await fetch(
          "http://localhost:5000/nvi/" +
            donor_name.toUpperCase() +
            "/" +
            donor_surname.toUpperCase() +
            "/" +
            donor_year_of_birth +
            "/" +
            donor_tckn
        );
        const jsonData = await kimlikdogrula.json();
        console.log(jsonData.response.TCKimlikNoDogrulaResult);
  
        if (jsonData.response.TCKimlikNoDogrulaResult) {
          const response = await fetch("http://localhost:5000/donations", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          });
  
          console.log(response);
          toast.success("Ba?????? kayd?? ba??ar??l?? ??ekilde olu??turuldu.");
          setTimeout(() => window.location.reload(), 5000);
        } else {
          toast.error("TC Kimlik Numaras?? do??rulamas?? ba??ar??s??z oldu!");
          setValidated(false)
        }
      } catch (e) {
        toast.error("Ba?????? kayd?? olu??turulamad??!");
        setValidated(false)
      }
    }
  }

  useEffect(() => {
    submitDonationSecond();
  }, [validated])

  const getDonation_types = async () => {
    try {
      const response = await fetch("http://localhost:5000/donationtypes");
      const jsonData = await response.json();

      setDonation_types(jsonData);
    } catch (e) {
      console.error(e.message);
    }
  };

  const getRegions = async () => {
    try {
      const response = await fetch("http://localhost:5000/regions");
      const jsonData = await response.json();

      setRegions(jsonData);
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    getRegions();
    getDonation_types();
  }, []);

  return (
    <Container>
      <h3 className="py-3">Ba?????? Kayd?? Olu??tur</h3>

      <Form noValidate validated={validated}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomDonorName">
            <Form.Label>Ba??????????n??n Ad??</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ba??????????n??n ad??n?? giriniz."
              onChange={(e) => setDonor_name(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Bu alan??n doldurulmas?? zorunludur.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomDonorSurname">
            <Form.Label>Ba??????????n??n Soyad??</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ba??????????n??n soyad??n?? giriniz."
              required
              onChange={(e) => setDonor_surname(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Bu alan??n doldurulmas?? zorunludur.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomDonorIdNumber">
            <Form.Label>TC Kimlik Numaras??</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ba??????????n??n TC Kimlik Numaras??n?? giriniz."
              required
              onChange={(e) => setDonor_tckn(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Bu alan??n doldurulmas?? zorunludur.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-4">
          <Form.Group as={Col} md="4" controlId="validationCustomYearOfBirth">
            <Form.Label>Do??um Y??l??</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ba??????????n??n do??um y??l??n?? giriniz."
              required
              onChange={(e) => setDonor_year_of_birth(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Bu alan??n doldurulmas?? zorunludur.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomDonorTel">
            <Form.Label>
              Telefon Numaras??</Form.Label>
              <Form.Control
                type="tel"
                placeholder="(5--) --- -- --"
                required
                onChange={(e) => setDonor_tel(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Bu alan??n doldurulmas?? zorunludur.
              </Form.Control.Feedback>
            
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomDonorEmail">
            <Form.Label>E-Posta Adresi</Form.Label>
            <Form.Control
              type="email"
              placeholder="---@---.---"
              required
              onChange={(e) => setDonor_email(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Ge??erli bir e-posta adresi giriniz.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-4">
          <Form.Group as={Col} md="4" controlId="validationCustomRegion">
            <Form.Label>Ba?????? B??lgesini Se??iniz</Form.Label>
            <Form.Control
              as="select"
              placeholder="Ba?????? B??lgesi"
              required
              onChange={(e) => setRegion_id(e.target.value)}
            >
              <option value="" disabled selected></option>

              {regions.map((regions) => (
                <option key={regions.region_id} value={regions.region_id}>
                  {regions.region_name}
                </option>
              ))}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Bu alan??n doldurulmas?? zorunludur.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustomDonationAmount"
          >
            <Form.Label>Ba?????? T??r??n?? Se??iniz</Form.Label>
            <Form.Control
              as="select"
              required
              onChange={(e) => setDonation_type_id(e.target.value)}
            >
              <option value="" disabled selected></option>

              {donation_types.map((donation_types) => (
                <option
                  key={donation_types.donation_type_id}
                  value={donation_types.donation_type_id}
                >
                  {donation_types.donation_type}
                </option>
              ))}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Bu alan??n doldurulmas?? zorunludur.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomDonationDate">
            <Form.Label>Ba?????? Tarihi</Form.Label>
            <Form.Control
              type="date"
              aria-describedby="inputGroupPrepend"
              required
              onChange={(e) => setDonation_date(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Bu alan??n doldurulmas?? zorunludur.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="text-center pt-5">
          <FormGroup>
            <Button
              className="mb-5"
              variant="outline-success"
              onClick={handleSubmit}
            >
              Kaydet
            </Button>
          </FormGroup>
        </Row>
      </Form>
      <ToastContainer newestOnTop closeOnClick />
    </Container>
  );
};

export default SubmitDonation;
