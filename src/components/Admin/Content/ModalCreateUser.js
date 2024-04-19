import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { FcPlus } from 'react-icons/fc';

const ModalCreateUser = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    const handleUploadImage = (event) => {
        // kiểm tra file đã upload chưa ?
        if(event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0]); 
        } 

        console.log('upload file', event.target.files[0]);
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add new user
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                size='xl'
                backdrop='static'
                className='modal-add-user'
            >

                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select
                                className="form-select"
                                onChange={(event) => setRole(event.target.value)}
                            >
                                <option value='USER' selected>User</option>
                                <option value='ADMIN' >ADMIN</option>
                            </select>
                        </div>

                        <div className="col-md-12">
                            <label
                                className="form-label label-upload"
                                htmlFor='labelUpload'
                            >
                                <FcPlus /> Upload the image
                            </label>
                            <input
                                type="file"
                                hidden id='labelUpload'
                                onChange={(event) => handleUploadImage(event)}
                            />
                        </div>

                        {/* <div className="col-md-12 img-preview">
                             <span>Image review</span> 
                            <img src='https://cdn.tuoitre.vn/thumb_w/730/471584752817336320/2023/1/17/571238e2-78fa-4099-b34e-9f0b8a5b3eb9-16739311416891725962966.jpg' />
                        </div> */}

                        <div className="col-md-12 img-preview">
                            {previewImage
                                ? <img src={previewImage} />
                                : <span>Image review</span>
                            }
                        </div>


                    </form>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCreateUser;

