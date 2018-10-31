import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'

const renderField = ({ input, label, type }) => (
  <div>
    <label>{label}</label>
    <div>
      <input
        type={type}
        {...input}
        placeholder={label}
      />
    </div>
  </div>
)

const renderHobbies = ({ fields }) => (
  <ul>
    <li>
      <button
        type="button"
        onClick={() => fields.push()}
      >
        Add Hobbies
      </button>
    </li>
    {fields.map((hobby, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Hobby"
          onClick={() => fields.remove(index)}
        >
          Remove Hobby
        </button>
        <Field
          name={hobby}
          type="text"
          component={renderField}
          label={`Hobby #${index + 1}`}
        />
      </li>
    ))}
  </ul>
)

const renderMembers = ({ fields }) => (
  <ul>
    <li>
      <button
        type="button"
        onClick={() => fields.push({})}
      >
        Add Member
      </button>
    </li>
    {fields.map((member, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Member"
          onClick={() => fields.remove(index)}
        >
          Remove
        </button>
        <h4>Member # {index + 1}</h4>
        <Field
          name={`${member}.firstName`}
          type="text"
          component={renderField}
          label="First Name"
        />
        <Field
          name={`${member}.lastName`}
          type="text"
          component={renderField}
          label="Last Name"
        />
        <FieldArray
          name={`${member}.hobbies`}
          component={renderHobbies}
        />
      </li>
    ))}
  </ul>
)

const Form = props => {
  const { handleSubmit, reset } = props

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Field
          name="clubName"
          type="text"
          component={renderField}
          label="Club Name"
        />
        <FieldArray
          name="members"
          component={renderMembers}
        />
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={reset}>Clear</button>
        </div>
      </form>
    </>
  )
}

export default reduxForm({
  form: "fieldArrays"
})(Form)
