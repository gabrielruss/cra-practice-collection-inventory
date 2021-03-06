import React from "react";
import PropTypes from "prop-types";
import { Header, Form, Button } from "semantic-ui-react";

const GameForm = ({ game, gameConsoles, onChange, onSave, saving }) => {
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
      <Form.Select
        fluid
        label="Console"
        name="consoleId"
        placeholder="Select Console"
        className="input-style"
        value={game.consoleId}
        options={gameConsoles}
        onChange={onChange}
      />
      <Button primary type="submit" content="Submit" onClick={onSave} loading={saving} disabled={saving}/>
    </Form.Group>
  );
};

GameForm.propTypes = {
  game: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  gameConsoles: PropTypes.array.isRequired,
  saving: PropTypes.bool.isRequired
};

export default GameForm;
