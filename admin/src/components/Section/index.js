import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'react-bootstrap';

import { Container, HeaderMain, Main } from './styles';

export default function Section(props) {
  const { content } = props;
  return (
    <Container>
      <HeaderMain>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Library
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
      </HeaderMain>
      <Main>{content}</Main>
    </Container>
  );
}

Section.propTypes = {
  content: PropTypes.element.isRequired,
};
