import React from 'react';
import { Form, Field } from 'react-final-form';
import '../sass/TestFinalForm.scss';

function TestFinalForm() {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    const onSubmit = async values => {
        await sleep(300);
        window.alert(JSON.stringify(values, undefined, 2));
    };

    const required = value => (value ? undefined : "Required");

    return (
        <div>
            <div>Form Component</div>
            <h3>This is a form that will use react final form, sass and styled components.</h3>
            <div>dafuq is up with this form...</div>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, reset, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="firstName" validate={required}>
                            {({ input, meta }) => (
                                <div>
                                    <label>First Name</label>
                                    <input {...input} type="text" placeholder="First Name" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="lastName" validate={required}>
                            {({ input, meta }) => (
                                <div>
                                    <label>Last Name</label>
                                    <input {...input} type="text" placeholder="Last Name" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <div className="buttons">
                            <button type="submit" disabled={submitting}>
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={reset}
                                disabled={submitting || pristine}
                            >
                                Reset
                            </button>
                        </div>
                        <pre>{JSON.stringify(values, 0, 2)}</pre>
                    </form>
                )}
            />
        </div>
    )
}

export default TestFinalForm;
