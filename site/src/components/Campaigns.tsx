import React, {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {CampaignsService} from "../services/campaigns.tsx";
import type {Campaign} from '../models/Campaign.tsx';
import {Button} from "@mui/material";
import ErrorPopup from "./widgets/ErrorPopup.tsx";
import CampaignModal from "./widgets/CampaignModal.tsx";

function Campaigns() {
  const [campaignsList, setCampaignsList] = useState<Campaign[]>([]);
  const [campaignsError, setCampaignsError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const fetchCampaigns = async () => {
    try {
      const results = await CampaignsService.list()
      setCampaignsList(results)
    } catch (e) {
      setCampaignsError((e as Error).message);
    }
  }

  useEffect(() => {
    fetchCampaigns();
  }, [])

  return (
    <>
      <CampaignModal showModal={showModal} setShowModal={setShowModal} refresh={fetchCampaigns}/>
      <div style={{
        gap:"5ch",
        flexDirection: 'row',
        display: "flex",
        alignItems: 'right'
      }}>
        <Button style={{marginLeft: "auto"}} variant="outlined" color="success" size="large" onClick={() => {
          setShowModal(true)
        }}>Create Campaign</Button>
      </div>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="right">Campaign</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {campaignsList.map(c => (
              <TableRow key={c.campaignId}>
                <TableCell component="th" scope="row">
                  {c.name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <ErrorPopup error={campaignsError} setError={setCampaignsError}/>
    </>
  );
}

export default Campaigns;