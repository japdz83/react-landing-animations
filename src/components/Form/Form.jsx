import React, { useState } from "react";
import {
    FormColumn,
    FormWrapper,
    FormSection,
    FormInput,
    FormRow,
    FormTitle,
    FormLabel,
    FormInputRow,
    FormButton,
    FormMessage,
} from "./FormStyles";
import { Container } from "../../globalStyles";
import validateForm from "./validateForm";

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const resultError = validateForm({ name, email, subject, message });

        if (resultError.includes("")) {
            setError(resultError);
            return;
        }
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setError(false);
        setSuccess("Message was sent!");
    };

    const messageVariants = {
        hidden: { y: 30, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: { delay: 0.2, duration: 0.4 },
        },
    };

    // const formData = [
    //     {
    //         label: "Name",
    //         value: name,
    //         onChange: (e) => setName(e.target.value),
    //         type: "text",
    //     },
    //     {
    //         label: "Email",
    //         value: email,
    //         onChange: (e) => setEmail(e.target.value),
    //         type: "email",
    //     },
    //     {
    //         label: "Subject",
    //         value: subject,
    //         onChange: (e) => setSubject(e.target.value),
    //         type: "text",
    //     },
    //     {
    //         label: "Message",
    //         value: message,
    //         onChange: (e) => setMessage(e.target.value),
    //         type: "textarea",
    //     },
    // ];

    return (
        <FormSection>
            <Container>
                <FormRow>
                    <FormColumn>
                        <FormTitle>Get in touch</FormTitle>
                        <FormWrapper onSubmit={handleSubmit}>
                            <FormInputRow>
                                <FormLabel>Name *</FormLabel>
                                <FormInput
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </FormInputRow>

                            <FormInputRow>
                                <FormLabel>Email *</FormLabel>
                                <FormInput
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </FormInputRow>

                            <FormInputRow>
                                <FormLabel>Subject *</FormLabel>
                                <FormInput
                                    type="text"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                            </FormInputRow>

                            <FormInputRow>
                                <FormLabel>Message *</FormLabel>
                                <FormInput
                                    type="textarea"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </FormInputRow>

                            <FormButton type="submit">Let's talk</FormButton>
                        </FormWrapper>
                        {error && (
                            <FormMessage
                                variants={messageVariants}
                                initial="hidden"
                                animate="animate"
                                error
                            >
                                {error}
                            </FormMessage>
                        )}
                        {success && (
                            <FormMessage
                                variants={messageVariants}
                                initial="hidden"
                                animate="animate"
                            >
                                {success}
                            </FormMessage>
                        )}
                    </FormColumn>
                </FormRow>
            </Container>
        </FormSection>
    );
};

export default Form;
