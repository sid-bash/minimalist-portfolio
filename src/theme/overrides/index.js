import Card from './Card';
import Paper from './Paper';
import Input from './Input';
import Table from './Table';
import Button from './Button';
import Tooltip from './Tooltip';
import Backdrop from './Backdrop';
import Typography from './Typography';
import Autocomplete from './Autocomplete';
import DataGrid from './Datagrid';
import LinearProgress from './LinearProgress';
import Dialog from './Dialog';
import Chip from './Chip';
import Icon from './Icon';
import Switch from './Switch';
import ButtonGroup from './ButtonGroup';

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Card(theme),
    Table(theme),
    Input(theme),
    Paper(theme),
    Button(theme),
    Tooltip(theme),
    Backdrop(theme),
    Typography(theme),
    Autocomplete(theme),
    DataGrid(theme),
    LinearProgress(theme),
    Dialog(theme),
    Chip(theme),
    Icon(theme),
    Switch(theme),
    ButtonGroup(theme),
  );
}
