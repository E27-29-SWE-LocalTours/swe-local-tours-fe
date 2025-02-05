/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import React, { useState, useEffect } from 'react';
import LocationForm from '@/components/forms/LocationForm';
import { getSingleLocation } from '@/api/locationData';
import PropTypes from 'prop-types';

export default function EditLocation({ params }) {
  const { id } = params;
  console.log('id:', id);
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    getSingleLocation(id).then(setEditItem);
    console.log('editItem:', editItem);
  }, [id]);

  return (
    <>
      <LocationForm obj={editItem} />;
    </>
  );
}

EditLocation.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};
