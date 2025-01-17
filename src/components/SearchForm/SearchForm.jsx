import * as SC from './SearchForm.styled';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

export const SearchForm = ({ onSubmit }) => (
  <Formik initialValues={{ q: '' }} onSubmit={onSubmit}>
    <SC.SearchForm>
      <SC.SearchFormInput
        name="q"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        required
      />

      <SC.SearchFormButton type="submit">
        <SC.ButtonLabel>Search</SC.ButtonLabel>
      </SC.SearchFormButton>
    </SC.SearchForm>
  </Formik>
);

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
