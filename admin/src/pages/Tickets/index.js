import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';

import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';

import { Content } from './styles';

import Main from '~/components/Main';
import ControlButtonTable from '~/components/ControlButtonTable';

export default function Tickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    async function loadTicket() {
      const response = await api.get('tickets');

      setTickets(response.data);
    }

    loadTicket();
  }, []);

  const titles = [
    'Solicitante',
    'Contato',
    'Data solicitação',
    'Tipo',
    'Protocolo',
    '#',
  ];

  const handleContact = contact => {
    const partOne = contact.slice(0, 2);
    const PartTwo = contact.slice(2, 11);
    const textAdjusted = `(${partOne}) ${PartTwo}`;

    return textAdjusted;
  };

  const ticketLog = api.get('tickets');
  console.tron.log(ticketLog);

  const content = (
    <Content>
      <Link to="/newticket">
        <Button>Novo ticket</Button>
      </Link>

      <Table className="table" striped bordered hover size="sm">
        <thead>
          <tr>
            {titles.map(column => (
              <th>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket => (
            <tr key={ticket.id}>
              {/*               <td>{ticket.person.name}</td>
              <td>{handleContact(ticket.person.phone)}</td>
              <td>
                {formatDistance(parseISO(ticket.date), new Date(), {
                  addSuffix: true,
                  locale: pt,
                })}
              </td>
              <td>{ticket.task.title}</td>
              <td>{ticket.protocol}</td> */}
              <td>
                <ControlButtonTable tickets />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Content>
  );

  return <Main content={content} />;
}
