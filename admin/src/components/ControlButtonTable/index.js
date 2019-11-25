import React from 'react';
import PropTypes from 'prop-types';
import { ButtonToolbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaCheck, FaWindowClose, FaEdit, FaTrash } from 'react-icons/fa';
import { Control } from './styles';

export default function ControlButtonTable(props) {
  const { schedules } = props;
  return (
    <Control>
      {schedules && (
        <ButtonToolbar>
          <OverlayTrigger
            placement="botton"
            overlay={
              <Tooltip>
                <strong>Marcar como realizado</strong>
              </Tooltip>
            }
          >
            <button type="button">
              <FaCheck />
            </button>
          </OverlayTrigger>
        </ButtonToolbar>
      )}
      <ButtonToolbar>
        <OverlayTrigger
          placement="botton"
          overlay={
            <Tooltip>
              <strong>{schedules ? 'Editar solicitação' : 'Editar'}</strong>
            </Tooltip>
          }
        >
          <button type="button">
            <FaEdit />
          </button>
        </OverlayTrigger>
      </ButtonToolbar>
      <ButtonToolbar>
        <OverlayTrigger
          placement="botton"
          overlay={
            <Tooltip>
              <strong>{schedules ? 'Cancelar solicitação' : 'Excliur'}</strong>
            </Tooltip>
          }
        >
          <button type="button">
            {schedules ? <FaWindowClose /> : <FaTrash />}
          </button>
        </OverlayTrigger>
      </ButtonToolbar>
    </Control>
  );
}

ControlButtonTable.propTypes = {
  schedules: PropTypes.bool.isRequired,
};
