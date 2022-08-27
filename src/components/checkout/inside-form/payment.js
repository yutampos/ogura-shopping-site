import { Checkbox } from "@mui/material";
import { FormGroup } from "@mui/material";
import { MenuItem } from "@mui/material";
import { TextField } from "@mui/material";
import { Accordion } from "@mui/material";
import { AccordionDetails } from "@mui/material";
import { AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Paper } from "@mui/material";
import { Select } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { convenienceStoreList } from "../data/formData";

import { useDispatch, useSelector } from "react-redux";
import { handleInputMenu } from "../../../store/action/checkoutAction";

export default function Payment(props) {
  // const [checkBoxBoolean, setCheckBoxBoolean] = useState(null);
  const checkoutData = useSelector((state) => state.checkoutReducer);
  const dispatch = useDispatch();

  return (
    <FormGroup>
      <Grid>
        <Grid sx={{ p: 4, pb: 6 }}>
          <Typography>支払い</Typography>
          {/* <Typography>すべての取引は安全で、暗号化されています。</Typography> */}
          <Paper sx={{ display: "flex", backgroundColor: "#fbf6ff" }}>
            <Checkbox
              checked={checkoutData.payment_method === "0"}
              value="0"
              onClick={(e) => {
                // setCheckBoxBoolean(0);

                dispatch(handleInputMenu(e, "payment_method"));
              }}
            />
            <Accordion sx={{ width: "100%" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Typography>クレジットカード</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <TextField
                    id="outlined-basic"
                    label="カード番号"
                    size="small"
                    variant="outlined"
                    sx={{ mt: 1, mx: 2, width: "100%", Color: "white" }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <TextField
                    id="outlined-basic"
                    label="カードの名義人"
                    size="small"
                    variant="outlined"
                    sx={{ mt: 1, mx: 2, width: "100%", Color: "white" }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <TextField
                    id="outlined-basic"
                    label="有効期限（月/年）"
                    size="small"
                    variant="outlined"
                    sx={{ mt: 1, ml: 2, mr: 1, width: "50%", Color: "white" }}
                  />
                  <TextField
                    id="outlined-basic"
                    label="セキュリティコード"
                    size="small"
                    variant="outlined"
                    sx={{ mt: 1, mr: 2, ml: 1, width: "50%", Color: "white" }}
                  />
                </Box>
              </AccordionDetails>
            </Accordion>
          </Paper>
          <Paper sx={{ mt: 2, display: "flex", backgroundColor: "#fbf6ff" }}>
            <Checkbox
              checked={checkoutData.payment_method === "1"}
              value="1"
              onClick={(e) => {
                // setCheckBoxBoolean(1);
                dispatch(handleInputMenu(e, "payment_method"));
              }}
            />
            <Accordion sx={{ width: "100%" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Typography>現金支払い</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>玄関先でのお支払い</Typography>
              </AccordionDetails>
            </Accordion>
          </Paper>
          <Paper sx={{ mt: 2, display: "flex", backgroundColor: "#fbf6ff" }}>
            <Checkbox
              checked={checkoutData.payment_method === "2"}
              value="2"
              onClick={(e) => {
                // setCheckBoxBoolean(3);

                dispatch(handleInputMenu(e, "payment_method"));
              }}
            />
            <Accordion sx={{ width: "100%" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Typography>コンビニ払い</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  ご利用されるコンビニエンスストアを選択してください
                </Typography>
                <Box>
                  <Select
                    fullWidth
                    size="small"
                    value={checkoutData.pay_convinience_method}
                    onChange={(e) => {
                      dispatch(handleInputMenu(e, "pay_convinience_method"));
                    }}
                  >
                    {convenienceStoreList.map((shop) => (
                      <MenuItem key={shop.code} value={shop.name}>
                        {shop.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>
      </Grid>
    </FormGroup>
  );
}
