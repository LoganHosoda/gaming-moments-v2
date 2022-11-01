import React, { useState, useEffect, useRef} from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import { BsPlay, BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';

interface IProps {
  text: string;
};

const NoResults = ({ text }: IProps) => {
  return (
    <div>NoResults</div>
  )
};

export default NoResults;