import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import immer from "immer"
import { useCallback, useState } from "react"
import "./App.css"

interface Row {
  name: string
  view: boolean
  create: boolean
  update: boolean
  delete: boolean
}

const initialData: Row[] = []
for (let it = 0; it < 100; it++) {
  initialData.push({
    name: "Nome",
    view: false,
    create: false,
    update: false,
    delete: false,
  })
}

function App() {
  const [data, setData] = useState(initialData)
  const setField = useCallback((ev: any) => {
    const index = ev.target.dataset.rindex
    const column = ev.target.dataset.rcolumn
    const checked = ev.target.checked
    setData((previous) => {
      return immer(previous, (draft) => {
        draft[index][column] = checked
      })
    })
  }, [])

  return (
    <>
      <h2>Hello</h2>
      <TableContainer sx={{ maxWidth: "400px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>View</TableCell>
              <TableCell>Create</TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, idx) => {
              return (
                <TableRow key={idx}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>
                    <Checkbox
                      inputProps={
                        {
                          "data-rcolumn": "view",
                          "data-rindex": idx,
                        } as any
                      }
                      checked={row.view}
                      onChange={setField}
                    />
                  </TableCell>
                  <TableCell>
                    <Checkbox
                      inputProps={
                        {
                          "data-rcolumn": "create",
                          "data-rindex": idx,
                        } as any
                      }
                      checked={row.create}
                      onChange={setField}
                    />
                  </TableCell>
                  <TableCell>
                    <Checkbox
                      inputProps={
                        {
                          "data-rcolumn": "update",
                          "data-rindex": idx,
                        } as any
                      }
                      checked={row.update}
                      onChange={setField}
                    />
                  </TableCell>
                  <TableCell>
                    <Checkbox
                      inputProps={
                        {
                          "data-rcolumn": "delete",
                          "data-rindex": idx,
                        } as any
                      }
                      checked={row.delete}
                      onChange={setField}
                    />
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default App
