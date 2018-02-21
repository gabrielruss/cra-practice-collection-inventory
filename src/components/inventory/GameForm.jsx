import React from "react";
import PropTypes from "prop-types";
import { Header, Form } from "semantic-ui-react";

const GameForm = ({ game, allConsoles, onChange, onSave }) => {
  return (
    <Form.Group>
      <Header>Manage Game</Header>
      <Form.Input
        fluid
        label="Name"
        name="name"
        value={game.name}
        placeholder="Name"
        className="input-style"
        onChange={onChange}
      />
      <Form.Input
        fluid
        label="Description"
        name="description"
        value={game.description}
        placeholder="Description"
        className="input-style"
        onChange={onChange}
      />
      <Form.Dropdown
        fluid
        label="Console"
        name="console"
        defaultValue="Select Console"
        value={game.console}
        options={allConsoles}
        className="input-style"
        onChange={onChange}
      />
      <Form.Button content="Submit" onClick={onSave} />
    </Form.Group>
  );
};

GameForm.propTypes = {
  game: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  allConsoles: PropTypes.array.isRequired
};

export default GameForm;
