import {
  Button,
  Dialog,
  Form,
  Heading,
  TextArea,
  TextField,
} from "react-aria-components";
import { DialogTrigger } from "react-aria-components/Modal";
import Modal from "../Modal";

export default function ReviewModal() {
  return (
    <DialogTrigger>
      <Button className="w-full h-10 hover:cursor-pointer bg-gray-200 text-black rounded-lg">
        + Add Review
      </Button>

      <Modal>
        <Dialog className="outline-none border-transparent p-6 relative">
          <Heading slot="title" className="mb-2">Escreva sua review</Heading>
          <Form className="flex flex-col gap-4">
            <TextField autoFocus className="flex flex-col gap-1">
              <TextArea
                className="p-3 border border-gray-300 rounded-md min-h-30 resize-none focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                placeholder="Ex: A forma como o diretor usou os efeitos práticos..."
              />
            </TextField>

            <div className="flex gap-2 self-end">
              <Button
                slot="close"
                className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300 transition-colors cursor-pointer"
              >
                Cancelar
              </Button>
              <Button
                slot="close"
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors font-semibold cursor-pointer"
              >
                Salvar
              </Button>
            </div>
          </Form>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}
