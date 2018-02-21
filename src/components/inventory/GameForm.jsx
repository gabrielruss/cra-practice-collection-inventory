import React from 'react';
import PropTypes from 'prop-types';
import { Header, Form } from 'semantic-ui-react'


const GameForm = ({ game, onChange, onSave }) => {
  return (
    <Form.Group>
      <Header>Manage Game</Header>
      <Form.Input fluid
        label='Name'
        name='name'
        value={game.name}
        placeholder='Name'
        className="input-style"
        onChange={onChange} />
      <Form.Input fluid
        label='Description'
        name='description'
        value={game.description}
        placeholder='Description'
        className="input-style"
        onChange={onChange} />
      <Form.Input fluid
        label='Console'
        name='console'
        value={game.console}
        placeholder='Console'
        className="input-style"
        onChange={onChange} />
      <Form.Button content="Submit" onClick={onSave} />
    </Form.Group>
  );
};

GameForm.propTypes = {
  game: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

export default GameForm;