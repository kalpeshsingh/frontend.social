<template>
	<div>
		<div class="submission-box-container">
			<div class="submission-box">
				<EditableValue
					ref="submissionBox"
					v-model="submission"
					:index="1"
					:is-editable="true"
					class="value"
					placeholder="Paste your solution here..."
					:multiline="true"
				/>
			</div>
		</div>
		<div class="action-buttons">
			<button class="save-button" @click="save">
				Save
			</button>
			<!-- <button @click="cancel">
        Cancel
      </button> -->
		</div>
	</div>
</template>
<script>
import eventBus from '@/utilities/eventBus';
import EditableValue from '@/components/common/EditableValue';
import challengeService from '@/services/challenges.service';
import { ToastType, messages } from '@/constants/constants';

export default {
	name: 'AddSubmission',
	components: {
<<<<<<< HEAD
		EditableValue
=======
		EditableValue,
>>>>>>> chore(package): rebase from remote master
	},
	props: {
		challengeId: {
			type: String,
<<<<<<< HEAD
			required: true
		}
	},
	data() {
		return {
			submission: ''
=======
			required: true,
		},
	},
	data() {
		return {
			submission: '',
>>>>>>> chore(package): rebase from remote master
		};
	},

	methods: {
		save() {
			if (this.$refs.submissionBox.editedValue) {
				challengeService
					.postSubmission({
						submission: this.$refs.submissionBox.editedValue,
<<<<<<< HEAD
						challengeId: this.challengeId
=======
						challengeId: this.challengeId,
>>>>>>> chore(package): rebase from remote master
					})
					.then(() => {
						this.$emit('save', this.submission);
						eventBus.$emit('show-toast', {
							body: messages.challenge.challengeSubmissionSuccess,
<<<<<<< HEAD
							title: messages.generic.success
=======
							title: messages.generic.success,
>>>>>>> chore(package): rebase from remote master
						});

						this.reset();
					})
<<<<<<< HEAD
					.catch(error => {
						eventBus.$emit('show-toast', {
							body: messages.challenge.challengeSubmissionFailure,
							title: messages.generic.error,
							type: ToastType.ERROR
=======
					.catch((error) => {
						eventBus.$emit('show-toast', {
							body: messages.challenge.challengeSubmissionFailure,
							title: messages.generic.error,
							type: ToastType.ERROR,
>>>>>>> chore(package): rebase from remote master
						});
					});
			}
		},
		reset() {
			this.$refs.submissionBox.selectItem('');
			this.submission = '';
<<<<<<< HEAD
		}
	}
=======
		},
	},
>>>>>>> chore(package): rebase from remote master
};
</script>
<style lang="scss" scoped>
.action-buttons {
	display: flex;
	justify-content: flex-end;
}
</style>
