import React, { useId, useRef } from "react";
import { Calendar } from "../../Assets/Icon/Icons";
import "./FormElements.css";
export const FormTextInput = (props) => {
  const {
    name,
    onChange,
    value,
    placeholder,
    label,
    Icon,
    mandatory,
    variant,
    iconPosition,
  } = props;
  const id = useId();
  return (
    <div className="form-text-input-box form-element">
      {label && <label htmlFor={id}>{label}</label>}
      <div className="form-text-input-main">
        {variant === "with-icon" && iconPosition === "left" && (
          <span className="form-input-icon">
            <Icon />
          </span>
        )}
        <input
          className="form-text-input"
          type={"text"}
          onChange={onChange}
          value={value}
          autoComplete="off"
          id={id}
          required={mandatory}
          name={name ?? ""}
          placeholder={placeholder ?? ""}
        />
        {variant === "with-icon" && iconPosition === "right" && (
          <span className="form-input-icon">
            <Icon />
          </span>
        )}
      </div>
    </div>
  );
};

export const RadioButton = (props) => {
  const { name, onChange, value, state, variant, valueType } = props;
  const id = useId();
  return (
    <div
      className={`radio-box ${variant === "square" ? "radio-box-square" : ""}`}
    >
      <input
        type="radio"
        value={value}
        className={name}
        checked={state}
        name={name}
        onChange={(e) => onChange(e, valueType)}
        id={`radio${id}`}
      />
      <label htmlFor={`radio${id}`}>
        {valueType === "boolean" ? (value === true ? "yes" : "no") : value}
      </label>
    </div>
  );
};

export const RadioButtonGroup = (props) => {
  const { data, onChange, state, variant } = props;
  const id = useId();
  return (
    <div className="radio-box-group form-element">
      {data?.headerName && (
        <h5 className="radio-group-title">{data?.headerName}</h5>
      )}
      <div className="radio-group-main">
        {data?.valueOptions?.map((item, i) => (
          <RadioButton
            key={id + i}
            value={item}
            valueType={data?.type}
            name={data?.name}
            onChange={onChange}
            state={state}
            variant={variant}
          />
        ))}
      </div>
    </div>
  );
};

export const DateInput = (props) => {
  const { label, name, value, onChange } = props;
  const id = useId();
  const ref = useRef(null);
  const showDatePicker = () => ref?.current?.showPicker();
  return (
    <div className="date-input-box">
      <label htmlFor={id}>{label}</label>
      <input
        name={name}
        onFocus={showDatePicker}
        type="date"
        id={id}
        ref={ref}
        required={true}
        value={value}
        onChange={onChange}
      />
      <div onClick={showDatePicker} className="date-input-display">
        <span>{value}</span>
        <button type="button" onClick={showDatePicker}>
          <Calendar />
        </button>
      </div>
    </div>
  );
};

export const DateInputGroup = (props) => {
  const {
    data: { headerName, name },
    onChange,
    state,
  } = props;
  let arr = ["from", "to"];
  const id = useId();
  return (
    <div className="date-input-group form-element">
      <h5 className="date-input-group-title">{headerName}</h5>
      <div className="date-input-group-main">
        {arr?.map((item, i) => (
          <DateInput
            key={i + id}
            name={name + item}
            onChange={onChange}
            label={item}
            value={state[name + item]}
          />
        ))}
      </div>
    </div>
  );
};
