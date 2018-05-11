import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Typeface, Layout } from '../lib';


storiesOf('Typeface', module)
  .add('Section Header', () => <Typeface.SectionHeader>Section Header</Typeface.SectionHeader>)
  .add('Title', () => <Typeface.Title>Title</Typeface.Title>)
  .add('Paragraph', () => (
    <Typeface.Paragraph>
      Paragraph
      <br />
      <br />
      <em>This is emphasized text</em>
      <br />
      <br />
      <strong>This is strong text</strong>
      <br />
      <pre>This is preformatted text</pre>
    </Typeface.Paragraph>
  ));

  storiesOf('Layout', module)
  .add('Responsive Grid', () => (
    <span>
      <Layout.Row>
        <Layout.Column styleCode={1}>
          Column 1
        </Layout.Column>
        <Layout.Column styleCode={1}>
          Column 2
        </Layout.Column>
        <Layout.Column styleCode={1}>
          Column 3
        </Layout.Column>
      </Layout.Row>
      <Layout.Row>
        <Layout.Column styleCode={1}>
          Column 3
        </Layout.Column>
        <Layout.Column styleCode={1}>
          Column 4
        </Layout.Column>
      </Layout.Row>
      <Layout.Row>
        <Layout.Column styleCode={1}>
          Column 5
        </Layout.Column>
        <Layout.Column styleCode={1}>
          Column 6
        </Layout.Column>
        <Layout.Column styleCode={1}>
          Column 7
        </Layout.Column>
        <Layout.Column styleCode={1}>
          Column 8
        </Layout.Column>
      </Layout.Row>
      <br />
      <hr />
      <br />
      <Layout.Row>
        <Layout.Column styleCode={1}> Style 1</Layout.Column>
        <Layout.Column styleCode={2}> Style 2</Layout.Column>
        <Layout.Column styleCode={3}> Style 3</Layout.Column>
        <Layout.Column styleCode={4}> Style 4</Layout.Column>
        <Layout.Column styleCode={5}> Style 5</Layout.Column>
      </Layout.Row>
    </span>
  ))
  .add('Card Style 1', () => <Layout.Row><Layout.Column styleCode={1}> Style 1</Layout.Column></Layout.Row>)
  .add('Card Style 2', () => <Layout.Row><Layout.Column styleCode={2}> Style 2</Layout.Column></Layout.Row>)
  .add('Card Style 3', () => <Layout.Row><Layout.Column styleCode={3}> Style 3</Layout.Column></Layout.Row>)
  .add('Card Style 4', () => <Layout.Row><Layout.Column styleCode={4}> Style 4</Layout.Column></Layout.Row>)
  .add('Card Style 5', () => <Layout.Row><Layout.Column styleCode={5}> Style 5</Layout.Column></Layout.Row>)


