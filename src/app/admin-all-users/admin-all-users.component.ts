import { Component, OnInit } from '@angular/core';
// src/app/components/user-score-list/user-score-list.component.ts
import { UserScoreService } from 'src/service/user-score.service';
import { UserScore, Status } from 'src/modal/user-score';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-all-users',
  templateUrl: './admin-all-users.component.html',
  styleUrls: ['./admin-all-users.component.css']
})
export class AdminAllUsersComponent  implements OnInit {
  userScores: UserScore[] = []; // Array to hold user scores
  filteredUserScores: UserScore[] = []; // Array to hold filtered user scores
  searchQuery: string = ''; // Search query for domain filtering
  statusQuery: string = ''; // Search query for status filtering
  errorMessage: string = ''; // Error message for API failure

  constructor(private userScoreService: UserScoreService, private router: Router) {}

  ngOnInit(): void {
    this.fetchUserScores();
  }

  // Fetch user scores from the backend
  fetchUserScores(): void {
    this.userScoreService.getUserScores().subscribe({
      next: (data: UserScore[]) => {
        if (data && Array.isArray(data)) {
          this.userScores = data.map((score) => ({
            ...score,
            domain: score.domain || '', // Default to an empty string if domain is null
            status: score.status || '', // Default to an empty string if status is null
          }));
          this.filteredUserScores = [...this.userScores];
          console.log('Fetched User Scores:', this.userScores);
        } else {
          this.userScores = [];
          this.filteredUserScores = [];
          console.error('Received invalid user scores data:', data);
        }
      },
      error: (error) => {
        this.errorMessage = 'Failed to fetch user scores. Please try again later.';
        console.error('Error fetching user scores:', error);
      },
    });
  }

  // Filter user scores by domain
  filterByDomain(): void {
    const query = this.searchQuery?.toLowerCase().trim() || '';
    this.filteredUserScores = this.userScores.filter((score) =>
      score.domain.toLowerCase().includes(query)
    );
    this.filterByStatus(); // Reapply status filter after domain filtering
  }

  // Filter user scores by status
  filterByStatus(): void {
    const query = this.statusQuery?.toLowerCase().trim() || '';
    this.filteredUserScores = this.filteredUserScores.filter((score) =>
      score.status.toLowerCase().includes(query)
    );
  }

  // Clear all filters
  clearFilters(): void {
    this.searchQuery = '';
    this.statusQuery = '';
    this.filteredUserScores = [...this.userScores]; // Reset filters
  }

  // Logout the admin
  logout(): void {
    const confirmLogout = confirm('Are you sure you want to log out?');
    if (confirmLogout) {
      this.router.navigate(['']);
    }
  }

  // Soft delete a user score
  deleteUser(id: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this user score temporarily?');
    if (confirmDelete) {
      // Temporarily remove the user score from the UI
      this.filteredUserScores = this.filteredUserScores.filter(score => score.id !== id);
      this.userScores = this.userScores.filter(score => score.id !== id);
      console.log(`User score with ID ${id} deleted temporarily.`);

      // Call the backend to soft delete the user score
      this.userScoreService.deleteUserScore(id).subscribe({
        next: () => {
          console.log(`User score with ID ${id} deleted from database.`);
        },
        error: (error) => {
          console.error('Failed to delete user score:', error);
          alert('Failed to delete user score. Please try again later.');
        }
      });
    }
  }

  // Soft delete all user scores
  deleteAllUsers(): void {
    const confirmDelete = confirm('Are you sure you want to delete all user scores?');
    if (confirmDelete) {
      this.userScoreService.softDeleteAllUserScores().subscribe({
        next: () => {
          this.fetchUserScores(); // Refresh user scores after soft deleting
          console.log('All user scores marked as deleted.');
        },
        error: (error) => {
          console.error('Failed to delete user scores:', error);
          alert('Failed to delete user scores. Please try again later.');
        }
      });
    }
  }
}